using Lab08.Common;
using Lab08.Exercise01.Model;
using Lab08.Exercise01.Steps;

namespace Lab08.Exercise01
{
    class Exercise: IExercise
    {
        private static readonly string CAR_COLOR = "silver";

        public void Execute()
        {
            new StepA(CAR_COLOR).Execute();

            var person = new Person
            {
                Id = 3,
                FirstName = "John",
                LastName = "Doe"
            };
            new StepB(person).Execute();
        }
    }
}
