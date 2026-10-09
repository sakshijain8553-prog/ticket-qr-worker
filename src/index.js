// index.js
// Core logic for Ticket QR Code Generator Worker

// Sanitize user input against XSS
function sanitizeInput(input) {
  if (typeof input !== "string") return input;
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function generateQR(ticket) {
  if (!ticket || !ticket.id || !ticket.event_name) {
    throw new Error("Invalid input");
  }

  // Sanitize event name
  const safeEventName = sanitizeInput(ticket.event_name);

  // Telemetry log
  console.log(
    "[Analytics] User interacted with Ticket QR Code Generator Worker",
  );

  return `QR-${ticket.id}-${safeEventName}`;
}

function listTickets(tickets) {
  if (!tickets || tickets.length === 0) {
    return "No data found";
  }

  // Telemetry log
  console.log(
    "[Analytics] User interacted with Ticket QR Code Generator Worker",
  );

  return tickets;
}

async function simulateNetworkRequest() {
  // Telemetry log
  console.log(
    "[Analytics] User interacted with Ticket QR Code Generator Worker",
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Loading...");
    }, 1000); // shorter delay for tests
  });
}

module.exports = { generateQR, listTickets, simulateNetworkRequest };
