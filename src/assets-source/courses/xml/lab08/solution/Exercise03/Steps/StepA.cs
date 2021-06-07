using Lab08.Common;
using System;
using System.Linq;
using System.Xml.Linq;

namespace Lab08.Exercise03.Steps
{
    class StepA: IDocumentAwareStep<XDocument>
    {
        private static readonly XNamespace NAMESPACE_URI = "NS";

        private readonly string carColor;

        public StepA(string carColor)
        {
            this.carColor = carColor;
        }

        public void Execute(XDocument document)
        {
            var licensePlateNumbers = from car in document.Root.Element(NAMESPACE_URI + "cars").Elements(NAMESPACE_URI + "car")
                                      let licensePlateNumber = car.Attribute("license-plate-number").Value
                                      let color = car.Element(NAMESPACE_URI + "color").Value
                                      where color == this.carColor
                                      select licensePlateNumber;

            var ages = from owner in document.Root.Element(NAMESPACE_URI + "owners").Elements(NAMESPACE_URI + "owner")
                       let age = owner.Element(NAMESPACE_URI + "age").Value
                       let ownedCar = owner.Element(NAMESPACE_URI + "owned-cars").Elements(NAMESPACE_URI + "owned-car").Select(a => a.Value)
                       where licensePlateNumbers.Intersect(ownedCar).Any()
                       select double.Parse(age);

            var averageAge = ages.Average(f => f);

            Console.WriteLine("The average age of owners owning a {0} car: {1:0.##}", this.carColor, averageAge);
        }
    }
}
