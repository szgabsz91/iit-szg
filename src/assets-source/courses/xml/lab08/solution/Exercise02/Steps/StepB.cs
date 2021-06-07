using Lab08.Common;
using Lab08.Exercise02.Model;
using System.Xml;

namespace Lab08.Exercise02.Steps
{
    class StepB: IDocumentAwareStep<XmlDocument>
    {
        private static readonly string NAMESPACE_ALIAS = "ns";
        private static readonly string NAMESPACE_URI = "NS";

        private readonly Car newCar;

        public StepB(Car newCar)
        {
            this.newCar = newCar;
        }

        public void Execute(XmlDocument document)
        {
            var namespaceManager = new XmlNamespaceManager(document.NameTable);
            namespaceManager.AddNamespace(NAMESPACE_ALIAS, NAMESPACE_URI);

            var carsElement = document.SelectSingleNode("/ns:car-database/ns:cars", namespaceManager);

            // <ns:car/>
            var carElement = document.CreateElement(NAMESPACE_ALIAS, "car", NAMESPACE_URI);
            carsElement.AppendChild(carElement);

            // <ns:car license-plate-number="${car.LicensePlateNumber}"/>
            var licensePlateNumberAttribute = document.CreateAttribute("license-plate-number");
            licensePlateNumberAttribute.Value = this.newCar.LicensePlateNumber;
            carElement.Attributes.Append(licensePlateNumberAttribute);

            // <ns:car license-plate-number="${car.LicensePlateNumber}">
            //   <ns:manufacturer>${car.Manufacturer}</ns:manufacturer>
            // </ns:car>
            var manufacturerElement = document.CreateElement(NAMESPACE_ALIAS, "manufacturer", NAMESPACE_URI);
            manufacturerElement.InnerText = this.newCar.Manufacturer;
            carElement.AppendChild(manufacturerElement);

            // <ns:car license-plate-number="${car.LicensePlateNumber}">
            //   <ns:manufacturer>${car.Manufacturer}</ns:manufacturer>
            //   <ns:model>${car.Model}</ns:model>
            // </ns:car>
            var modelElement = document.CreateElement(NAMESPACE_ALIAS, "model", NAMESPACE_URI);
            modelElement.InnerText = this.newCar.Model;
            carElement.AppendChild(modelElement);

            // <ns:car license-plate-number="${car.LicensePlateNumber}">
            //   <ns:manufacturer>${car.Manufacturer}</ns:manufacturer>
            //   <ns:model>${car.Model}</ns:model>
            //   <ns:color>${car.Color}</ns:color>
            // </ns:car>
            var colorElement = document.CreateElement(NAMESPACE_ALIAS, "color", NAMESPACE_URI);
            colorElement.InnerText = this.newCar.Color;
            carElement.AppendChild(colorElement);
        }
    }
}
