using Lab08.Common;
using Lab08.Exercise03.Model;
using Lab08.Exercise03.Steps;
using System.Xml.Linq;

namespace Lab08.Exercise03
{
    class Exercise: IExercise
    {
        private static readonly string INPUT_FILE_PATH = "Data/car-database.xml";
        private static readonly string CAR_COLOR = "silver";
        private static readonly Car NEW_CAR = new Car
        {
            LicensePlateNumber = "AB12 CDH",
            Manufacturer = "Audi",
            Model = "Q4 e-tron",
            Color = "blue"
        };
        private static readonly string OWNER_NAME_TO_REMOVE = "Jane Doe";

        public void Execute()
        {
            var document = XDocument.Load(INPUT_FILE_PATH);

            new StepA(CAR_COLOR).Execute(document);
            new StepB(NEW_CAR).Execute(document);
            new StepC(OWNER_NAME_TO_REMOVE).Execute(document);
            new StepD().Execute(document);
        }
    }
}
