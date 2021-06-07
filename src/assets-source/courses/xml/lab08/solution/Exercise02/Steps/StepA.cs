using Lab08.Common;
using System;
using System.Collections.Generic;
using System.Xml;

namespace Lab08.Exercise02.Steps
{
    class StepA: IDocumentAwareStep<XmlDocument>
    {
        private static readonly string NAMESPACE_ALIAS = "ns";
        private static readonly string NAMESPACE_URI = "NS";

        private readonly string carColor;

        public StepA(string carColor)
        {
            this.carColor = carColor;
        }

        public void Execute(XmlDocument document)
        {
            var namespaceManager = new XmlNamespaceManager(document.NameTable);
            namespaceManager.AddNamespace(NAMESPACE_ALIAS, NAMESPACE_URI);

            var licensePlateNumbers = new List<string>();

            var carElements = document.SelectNodes("ns:car-database/ns:cars/ns:car", namespaceManager);
            foreach (XmlElement carElement in carElements)
            {
                var licensePlateNumber = carElement.Attributes["license-plate-number"].Value;
                var color = carElement["ns:color"].InnerText;

                if (color == this.carColor)
                {
                    licensePlateNumbers.Add(licensePlateNumber);
                }
            }

            var averageAge = 0.0;
            var numberOfOwners = 0;

            var ownerElements = document.SelectNodes("ns:car-database/ns:owners/ns:owner", namespaceManager);
            foreach (XmlElement ownerElement in ownerElements)
            {
                var age = double.Parse(ownerElement["ns:age"].InnerText);
                var ownedCarElements = ownerElement["ns:owned-cars"].SelectNodes("ns:owned-car", namespaceManager);

                foreach (XmlElement ownedCarElement in ownedCarElements)
                {
                    var licensePlateNumber = ownedCarElement.InnerText;
                    
                    if (licensePlateNumbers.Contains(licensePlateNumber))
                    {
                        averageAge += age;
                        numberOfOwners++;
                    }
                }
            }

            averageAge /= numberOfOwners;

            Console.WriteLine("The average age of owners owning a {0} car: {1:0.##}", this.carColor, averageAge);
        }
    }
}
