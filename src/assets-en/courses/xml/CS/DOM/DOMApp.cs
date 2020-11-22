using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace XMLCSApp.DOM
{
    public class DOMApp
    {
        private static readonly string INPUT_FILE_PATH = "Data/autoDB.xml";
        private static readonly string NAMESPACE_PREFIX = "a";
        private static readonly string NAMESPACE_URI = "http://iit.uni-miskolc.hu/xml/autok";

        public void DoWork()
        {
            Read();
            Write();
        }

        private void Read()
        {
            XmlDocument document = new XmlDocument();
            document.Load(INPUT_FILE_PATH);

            XmlNamespaceManager nsManager = new XmlNamespaceManager(document.NameTable);
            nsManager.AddNamespace(NAMESPACE_PREFIX, NAMESPACE_URI);

            List<string> rendszamok = new List<string>();

            XmlNodeList autoNodeList = document.SelectNodes("a:autoDB/a:autok/a:auto", nsManager);
            foreach (XmlElement autoElement in autoNodeList)
            {
                var rsz = autoElement.Attributes["a:rsz"].Value;
                var szin = autoElement["a:szin"].InnerText;

                if (szin == "kék")
                {
                    rendszamok.Add(rsz);
                }
            }

            double atlagFizetes = 0;
            int darabszam = 0;

            XmlNodeList tulajdonosNodeList = document.SelectNodes("a:autoDB/a:tulajdonosok/a:tulajdonos", nsManager);
            foreach (XmlElement tulajdonosElement in tulajdonosNodeList)
            {
                var tulajdonosFeldolgozva = false;
                var fizetes = double.Parse(tulajdonosElement["a:fizetes"].InnerText);
                var tulajdonosAutoi = tulajdonosElement["a:autok"].SelectNodes("a:auto", nsManager);

                foreach (XmlElement autoElement in tulajdonosAutoi)
                {
                    var rsz = autoElement.InnerText;
                    
                    if (rendszamok.Contains(rsz) && !tulajdonosFeldolgozva)
                    {
                        atlagFizetes += fizetes;
                        darabszam++;
                        tulajdonosFeldolgozva = true;
                    }
                }
            }

            atlagFizetes /= darabszam;

            Console.WriteLine("A kék autók tulajdonosainak átlagfizetése: {0}", atlagFizetes);
        }

        private void Write()
        {
            XmlDocument document = new XmlDocument();
            document.Load(INPUT_FILE_PATH);

            XmlNamespaceManager nsManager = new XmlNamespaceManager(document.NameTable);
            nsManager.AddNamespace(NAMESPACE_PREFIX, NAMESPACE_URI);

            XmlNode autokNode = document.SelectSingleNode("/a:autoDB/a:autok", nsManager);

            // Cél:
            // <a:auto a:rsz="ABC-129">
            //   <a:gyarto>Trabant</a:gyarto>
            //   <a:szin>zöld</a:szin>
            // </a:auto>

            // <a:auto/>
            XmlElement autoElement = document.CreateElement(NAMESPACE_PREFIX, "auto", NAMESPACE_URI);
            autokNode.AppendChild(autoElement);

            // <a:auto a:rsz="ABC-129"/>
            XmlAttribute rszAttribute = document.CreateAttribute(NAMESPACE_PREFIX, "rsz", NAMESPACE_URI);
            rszAttribute.Value = "ABC-129";
            autoElement.Attributes.Append(rszAttribute);

            // <a:auto a:rsz="ABC-129">
            //   <a:gyarto>Trabant</a:gyarto>
            // </a:auto>
            XmlElement gyartoElement = document.CreateElement(NAMESPACE_PREFIX, "gyarto", NAMESPACE_URI);
            gyartoElement.InnerText = "Trabant";
            autoElement.AppendChild(gyartoElement);

            // <a:auto a:rsz="ABC-129">
            //   <a:gyarto>Trabant</a:gyarto>
            //   <a:szin>zöld</a:szin>
            // </a:auto>
            XmlElement szinElement = document.CreateElement(NAMESPACE_PREFIX, "szin", NAMESPACE_URI);
            szinElement.InnerText = "zöld";
            autoElement.AppendChild(szinElement);

            // Utolsó tulajdonos elem eltávolítása
            XmlNodeList tulajdonosNodeList = document.SelectNodes("/a:autoDB/a:tulajdonosok/a:tulajdonos", nsManager);
            XmlNode lastTulajdonosElement = tulajdonosNodeList[tulajdonosNodeList.Count - 1];
            lastTulajdonosElement.ParentNode.RemoveChild(lastTulajdonosElement);

            document.Save(Console.Out);
        }
    }
}
