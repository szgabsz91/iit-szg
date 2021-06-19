using Lab03.Service;
using Lab03.Steps;

namespace Lab03
{
    class Program
    {
        static void Main(string[] args)
        {
            var personService = new PersonService();
            var carService = new CarService();

            var people = personService.GetPeople();
            var cars = carService.GetCars();

            new StepA(people, cars).Execute();
            new StepB(people, cars).Execute();
        }
    }
}
