using Lab08.Common;
using Lab08.Exercise01.Model;
using System.IO;
using System.Xml;

namespace Lab08.Exercise01.Steps
{
    class StepB: IStep
    {
        private static readonly string OUTPUT_FILE_PATH = "bin/person.xml";
        private static readonly string NAMESPACE_ALIAS = "ns";
        private static readonly string NAMESPACE_URI = "NS";

        private readonly Person person;

        public StepB(Person person)
        {
            this.person = person;
        }

        public void Execute()
        {
            using (var fileStream = new FileStream(OUTPUT_FILE_PATH, FileMode.Create))
            using (var xmlWriter = XmlTextWriter.Create(fileStream, new XmlWriterSettings { Indent = true }))
            {
                xmlWriter.WriteStartDocument();
                xmlWriter.WriteStartElement(NAMESPACE_ALIAS, "person", NAMESPACE_URI);
                xmlWriter.WriteAttributeString("id", this.person.Id.ToString());
                xmlWriter.WriteStartElement(NAMESPACE_ALIAS, "first-name", NAMESPACE_URI);
                xmlWriter.WriteString(this.person.FirstName);
                xmlWriter.WriteEndElement();
                xmlWriter.WriteStartElement(NAMESPACE_ALIAS, "last-name", NAMESPACE_URI);
                xmlWriter.WriteString(this.person.LastName);
                xmlWriter.WriteEndElement();
                xmlWriter.WriteEndElement();
                xmlWriter.WriteEndDocument();
            }
        }
    }
}
