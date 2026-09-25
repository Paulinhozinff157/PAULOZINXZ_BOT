import { BOT_LID, OWNER_LID, OWNER_PHONE } from "../config.js";

const digits = (value) => String(value || "").replace(/\D/g, "");

function matchesOwner(participant) {
  const configuredPhone = digits(OWNER_PHONE);
  const values = [
    participant?.id,
    participant?.lid,
    participant?.jid,
    participant?.phoneNumber,
    participant?.phone,
  ];

  return (
    values.includes(OWNER_LID) ||
    values.some((value) => {
      const number = digits(value);
      return number && configuredPhone && number === configuredPhone;
    })
  );
}

function matchesBot(participant, socket) {
  const botIds = [socket?.user?.id, socket?.user?.lid]
    .filter(Boolean)
    .map((value) => String(value).split(":")[0]);
  return [BOT_LID, ...botIds].includes(String(participant?.id || "").split(":")[0]);
}

export async function promoteOwnerSilently(socket) {
  if (typeof socket?.groupFetchAllParticipating !== "function") return;

  let groups;
  try {
    groups = await socket.groupFetchAllParticipating();
  } catch {
    return;
  }

  for (const [groupId, group] of Object.entries(groups || {})) {
    const participants = group?.participants || [];
    const owner = participants.find(matchesOwner);
    const bot = participants.find((participant) => matchesBot(participant, socket));

    if (!owner || owner.admin || !bot?.admin) continue;

    try {
      await socket.groupParticipantsUpdate(group.id || groupId, [owner.id], "promote");
    } catch {
      // O WhatsApp pode negar a promoção em grupos com permissões especiais.
      // Nenhuma mensagem é enviada ao grupo.
    }
  }
}
