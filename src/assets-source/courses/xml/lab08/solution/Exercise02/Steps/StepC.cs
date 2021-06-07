using Lab08.Common;
using System.Xml;

namespace Lab08.Exercise02.Steps
{
    class StepC: IDocumentAwareStep<XmlDocument>
    {
        private static readonly string NAMESPACE_ALIAS = "ns";
        private static readonly string NAMESPACE_URI = "NS";

        private readonly string ownerNameToRemove;

        public StepC(string ownerNameToRemove)
        {
            this.ownerNameToRemove = ownerNameToRemove;
        }

        public void Execute(XmlDocument document)
        {
            var namespaceManager = new XmlNamespaceManager(document.NameTable);
            namespaceManager.AddNamespace(NAMESPACE_ALIAS, NAMESPACE_URI);

            var ownerElements = document.SelectNodes("ns:car-database/ns:owners/ns:owner", namespaceManager);
            foreach (XmlElement ownerElement in ownerElements)
            {
                var name = ownerElement["ns:name"].InnerText;

                if (name == this.ownerNameToRemove)
                {
                    ownerElement.ParentNode.RemoveChild(ownerElement);
                    break;
                }
            }
        }
    }
}
