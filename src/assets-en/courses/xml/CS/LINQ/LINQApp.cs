using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace XMLCSApp.LINQ
{
    public class LINQApp
    {
        private static readonly string INPUT_FILE_PATH = "Data/autoDB.xml";
        private static readonly XNamespace NAMESPACE_URI = "http://iit.uni-miskolc.hu/xml/autok";

        public void DoWork()
        {
            Read();
            Write();
        }

        private void Read()
        {
            XDocument document = XDocument.Load(INPUT_FILE_PATH);

            var rendszamok = from a in document.Root.Element(NAMESPACE_URI + "autok").Elements(NAMESPACE_URI + "auto")
                             let rsz = a.Attribute(NAMESPACE_URI + "rsz").Value
                             let szin = a.Element(NAMESPACE_URI + "szin").Value
                             where szin == "kék"
                             select rsz;

            var fizetesek = from t in document.Root.Element(NAMESPACE_URI + "tulajdonosok").Elements(NAMESPACE_URI + "tulajdonos")
                            let fizetes = t.Element(NAMESPACE_URI + "fizetes").Value
                            let autok = t.Element(NAMESPACE_URI + "autok").Elements(NAMESPACE_URI + "auto").Select(a => a.Value)
                            where rendszamok.Intersect(autok).Any()
                            select double.Parse(fizetes);

            var atlagFizetes = fizetesek.Average(f => f);

            Console.WriteLine("A kék autók tulajdonosainak átlagfizetése: {0}", atlagFizetes);
        }

        private void Write()
        {
            XDocument document = XDocument.Load(INPUT_FILE_PATH);
            XElement autokElement = document.Root.Element(NAMESPACE_URI + "autok");

            // Cél:
		    // <a:auto a:rsz="ABC-129">
            //   <a:gyarto>Trabant</a:gyarto>
            //   <a:szin>zöld</a:szin>
            // </a:auto>

            autokElement.Add(
                new XElement(NAMESPACE_URI + "auto",
                    new XAttribute(NAMESPACE_URI + "rsz", "ABC-129"),
                    new XElement(NAMESPACE_URI + "gyarto", "Trabant"),
                    new XElement(NAMESPACE_URI + "szin", "zöld")
                )
            );

            // Utolsó tulajdonos elem eltávolítása
            XElement lastTulajdonosElement = document.Root.Element(NAMESPACE_URI + "tulajdonosok").Elements(NAMESPACE_URI + "tulajdonos").Last();
            lastTulajdonosElement.Remove();

            document.Save(Console.Out);
        }
    }
}
