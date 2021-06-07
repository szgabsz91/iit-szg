using Lab08.Common;
using System.Linq;
using System.Xml.Linq;

namespace Lab08.Exercise03.Steps
{
    class StepC: IDocumentAwareStep<XDocument>
    {
        private static readonly XNamespace NAMESPACE_URI = "NS";

        private readonly string ownerNameToRemove;

        public StepC(string ownerNameToRemove)
        {
            this.ownerNameToRemove = ownerNameToRemove;
        }

        public void Execute(XDocument document)
        {
            var ownersToRemove = from owner in document.Root.Element(NAMESPACE_URI + "owners").Elements(NAMESPACE_URI + "owner")
                                 let name = owner.Element(NAMESPACE_URI + "name").Value
                                 where name == this.ownerNameToRemove
                                 select owner;
            ownersToRemove.First().Remove();
        }
    }
}
