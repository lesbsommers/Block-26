import React, { useEffect, useState } from "react";``

function SelectedContact({ selectedContactId, contacts }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  return (
    <div>
    <h2>Selected Contact</h2>
    <p>Name: {selectedContact.name}</p>
    <p>Email: {selectedContact.email}</p>
    <p>Phone: {selectedContact.address.phone}</p>
  </div>
  );
}

export default SelectedContact;