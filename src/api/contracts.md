# API Contracts

## Ticket QR Worker Endpoints

- **POST /tickets**
  - Input: { user_id, event_name, event_date, venue, seat }
  - Output: { ticket_id, qr_code }

- **GET /tickets/:id**
  - Output: ticket details + QR code

- **GET /tickets**
  - Output: list of all tickets

- **PUT /tickets/:id**
  - Input: updated ticket fields
  - Output: updated ticket details

- **DELETE /tickets/:id**
  - Output: success/failure

- **POST /tickets/bulk-delete**
  - Input: [ticket_ids]
  - Output: success/failure
