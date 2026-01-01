import { motion } from "framer-motion";
import Card from "./Card";
import { useState } from "react";
import { ticketList } from "../data/tickets";

export default function TicketGallery() {
  const [query, setQuery] = useState("");

  const filtered = ticketList.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.destiny.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          placeholder="Busca un destino :3"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <motion.div
        layout
        className="motion-ticket"
      >
        {filtered.map(ticket => (
          <motion.div key={ticket.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Card
              title={ticket.title}
              pilot={ticket.pilot}
              copilot={ticket.copilot}
              fligth={ticket.fligth}
              date={ticket.date}
              kilometers={ticket.kilometers}
              origin={ticket.origin}
              destiny={ticket.destiny}
              description={ticket.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}


