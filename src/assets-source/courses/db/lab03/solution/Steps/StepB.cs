using System;
using System.Collections.Generic;
using System.Linq;
using Lab03.Model;

namespace Lab03.Steps
{
    class StepB: IStep
    {
        private readonly IEnumerable<Person> people;
        private readonly IEnumerable<Car> cars;

        public StepB(IEnumerable<Person> people, IEnumerable<Car> cars)
        {
            this.people = people;
            this.cars = cars;
        }

        public void Execute()
        {
            Console.WriteLine("Using chained method calls:");

            var result = this.people
                .Join(
                    this.cars,
                    person => string.Format("{0} {1}", person.FirstName, person.LastName),
                    car => car.Owner,
                    (person, car) => new { Person = person, Car = car }
                )
                .GroupBy(
                    pair => pair.Person.Salary.ToString().Length,
                    (key, value) => new
                    {
                        SalaryDigits = key,
                        TotalCarPrice = value.Sum(pair => pair.Car.Price)
                    }
                )
                .OrderByDescending(item => item.TotalCarPrice);

            foreach (var item in result)
            {
                Console.WriteLine("{0} - {1}", item.SalaryDigits, item.TotalCarPrice);
            }
        }
    }
}
