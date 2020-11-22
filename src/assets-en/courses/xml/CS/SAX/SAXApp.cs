using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace XMLCSApp.SAX
{
    public class SAXApp
    {
        private static readonly string INPUT_FILE_PATH = "Data/autoDB.xml";
        private static readonly string NAMESPACE_PREFIX = "p";
        private static readonly string NAMESPACE_URI = "http://iit.uni-miskolc.hu/xml/people";

        public void DoWork()
        {
            Read();
            Write();
        }

        private void Read()
        {
            string aktualisElemnev = null;
            string aktualisRendszam = null;
            List<string> rendszamok = new List<string>();
            double aktualisFizetes = 0;
            double atlagFizetes = 0;
            int darabszam = 0;
            bool tulajdonoFeldolgozva = true;

            using (XmlTextReader xmlReader = new XmlTextReader(INPUT_FILE_PATH))
            {
                while (xmlReader.Read())
                {
                    switch (xmlReader.NodeType)
                    {
                        case XmlNodeType.Element:
                            aktualisElemnev = xmlReader.Name;
                            switch (xmlReader.Name)
                            {
                                case "a:auto":
                                    aktualisRendszam = xmlReader.GetAttribute("a:rsz");
                                    break;

                                case "a:tulajdonos":
                                    tulajdonoFeldolgozva = false;
                                    break;
                            }
                            break;

                        case XmlNodeType.Text:
                            switch (aktualisElemnev)
                            {
                                case "a:szin":
                                    if (xmlReader.Value == "kék")
                                    {
                                        rendszamok.Add(aktualisRendszam);
                                    }
                                    break;

                                case "a:fizetes":
                                    aktualisFizetes = double.Parse(xmlReader.Value);
                                    break;

                                case "a:auto":
                                    string rendszam = xmlReader.Value;
                                    if (rendszamok.Contains(rendszam) && !tulajdonoFeldolgozva)
                                    {
                                        atlagFizetes += aktualisFizetes;
                                        darabszam++;
                                        tulajdonoFeldolgozva = true;
                                    }
                                    break;
                            }
                            break;

                        case XmlNodeType.EndElement:
                            if (xmlReader.Name == "a:tulajdonosok")
                            {
                                atlagFizetes /= darabszam;
                            }
                            break;
                    }
                }
            }

            Console.WriteLine("A kék autók tulajdonosainak átlagfizetése: {0}", atlagFizetes);
        }

        private void Write()
        {
            using (XmlTextWriter xmlWriter = new XmlTextWriter(Console.Out))
            {
                xmlWriter.Formatting = Formatting.Indented;
                xmlWriter.WriteStartDocument();
                xmlWriter.WriteStartElement(NAMESPACE_PREFIX, "person", NAMESPACE_URI);
                xmlWriter.WriteAttributeString("id", "1");
                xmlWriter.WriteStartElement(NAMESPACE_PREFIX, "firstName", NAMESPACE_URI);
                xmlWriter.WriteString("John");
                xmlWriter.WriteEndElement();
                xmlWriter.WriteStartElement(NAMESPACE_PREFIX, "lastName", NAMESPACE_URI);
                xmlWriter.WriteString("Doe");
                xmlWriter.WriteEndElement();
                xmlWriter.WriteEndElement();
                xmlWriter.WriteEndDocument();
            }
        }
    }
}
