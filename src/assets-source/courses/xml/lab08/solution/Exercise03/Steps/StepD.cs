using Lab08.Common;
using System.Xml.Linq;

namespace Lab08.Exercise03.Steps
{
    class StepD: IDocumentAwareStep<XDocument>
    {
        private static readonly string OUTPUT_FILE_PATH = "bin/car-database-exercise03.xml";

        public void Execute(XDocument document)
        {
            document.Save(OUTPUT_FILE_PATH);
        }
    }
}
