using Lab08.Common;
using System.Xml;

namespace Lab08.Exercise02.Steps
{
    class StepD: IDocumentAwareStep<XmlDocument>
    {
        private static readonly string OUTPUT_FILE_PATH = "bin/car-database-exercise02.xml";

        public void Execute(XmlDocument document)
        {
            document.Save(OUTPUT_FILE_PATH);
        }
    }
}
