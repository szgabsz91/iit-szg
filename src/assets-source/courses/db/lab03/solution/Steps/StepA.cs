using System;
using System.Collections.Generic;
using System.Linq;
using Lab03.Model;

namespace Lab03.Steps
{
    public class StepA: IStep
    {
        private readonly IEnumerable<Person> people;
        private readonly IEnumerable<Car> cars;

        public StepA(IEnumerable<Person> people, IEnumerable<Car> cars)
        {
            this.people = people;
            this.cars = cars;
        }

        public void Execute()
        {
            Console.WriteLine("Using LINQ expression:");

            var result =
                from person in this.people
                let fullName = string.Format("{0} {1}", person.FirstName, person.LastName)
                join car in cars on fullName equals car.Owner
                let pair = new { Person = person, Car = car }
                group pair by pair.Person.Salary.ToString().Length into grouping
                let record = new
                {
                    SalaryDigits = grouping.Key,
                    TotalCarPrice = (
                        from pair in grouping
                        let price = pair.Car.Price
                        select price
                    ).Sum()
                }
                orderby record.TotalCarPrice descending
                select record;

            foreach (var item in result)
            {
                Console.WriteLine("{0} - {1}", item.SalaryDigits, item.TotalCarPrice);
            }
            Console.WriteLine();
        }
    }
}
