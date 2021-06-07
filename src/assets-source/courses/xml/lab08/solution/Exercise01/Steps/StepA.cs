using Lab08.Common;
using System;
using System.Collections.Generic;
using System.Xml;

namespace Lab08.Exercise01.Steps
{
    class StepA: IStep
    {
        private static readonly string INPUT_FILE_PATH = "Data/car-database.xml";

        private readonly string carColor;

        public StepA(string carColor)
        {
            this.carColor = carColor;
        }

        public void Execute()
        {
            string currentElement = null;
            string currentLicensePlateNumber = null;
            var licensePlateNumbers = new List<string>();
            var currentAge = 0.0;
            var averageAge = 0.0;
            var numberOfOwners = 0;

            using (var xmlReader = new XmlTextReader(INPUT_FILE_PATH))
            {
                while (xmlReader.Read())
                {
                    switch (xmlReader.NodeType)
                    {
                        case XmlNodeType.Element:
                            currentElement = xmlReader.Name;
                            switch (xmlReader.Name)
                            {
                                case "ns:car":
                                    currentLicensePlateNumber = xmlReader.GetAttribute("license-plate-number");
                                    break;
                            }
                            break;

                        case XmlNodeType.Text:
                            switch (currentElement)
                            {
                                case "ns:color":
                                    if (xmlReader.Value == this.carColor)
                                    {
                                        licensePlateNumbers.Add(currentLicensePlateNumber);
                                    }
                                    break;

                                case "ns:age":
                                    currentAge = double.Parse(xmlReader.Value);
                                    break;

                                case "ns:owned-car":
                                    string rendszam = xmlReader.Value;
                                    if (licensePlateNumbers.Contains(rendszam))
                                    {
                                        averageAge += currentAge;
                                        numberOfOwners++;
                                    }
                                    break;
                            }
                            break;

                        case XmlNodeType.EndElement:
                            if (xmlReader.Name == "ns:owners")
                            {
                                averageAge /= numberOfOwners;
                            }
                            break;
                    }
                }
            }

            Console.WriteLine("The average age of owners owning a {0} car: {1:0.##}", this.carColor, averageAge);
        }
    }
}
