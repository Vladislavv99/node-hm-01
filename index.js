import yargs from "yargs";
import contactsServise from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const allContacts = await contactsServise.listContacts();
        return console.log(allContacts);
      case "get":
        const contactById = await contactsServise.getContactById(id);
        return console.log(contactById);
      case "add":
        const newContact = await contactsServise.addContact({
          name,
          email,
          phone,
        });
        return console.log(newContact);
      case "remove":
        const removeContact = await contactsServise.removeContact(id);
        return console.log(removeContact);
      default:
        console.log("Unknown action");
    }
  } catch (error) {
    console.log(error);
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
