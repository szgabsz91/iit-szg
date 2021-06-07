using Lab08.Common;
using Lab08.Exercise03.Model;
using System.Xml.Linq;

namespace Lab08.Exercise03.Steps
{
    class StepB: IDocumentAwareStep<XDocument>
    {
        private static readonly XNamespace NAMESPACE_URI = "NS";

        private readonly Car newCar;

        public StepB(Car newCar)
        {
            this.newCar = newCar;
        }

        public void Execute(XDocument document)
        {
            var carsElement = document.Root.Element(NAMESPACE_URI + "cars");

            carsElement.Add(
                new XElement(
                    NAMESPACE_URI + "car",
                    new XAttribute("license-plate-number", this.newCar.LicensePlateNumber),
                    new XElement(NAMESPACE_URI + "manufacturer", this.newCar.Manufacturer),
                    new XElement(NAMESPACE_URI + "model", this.newCar.Model),
                    new XElement(NAMESPACE_URI + "color", this.newCar.Color)
                )
            );
        }
    }
}
