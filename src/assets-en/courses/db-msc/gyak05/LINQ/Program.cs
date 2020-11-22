using LINQ.Model;
using LINQ.Service;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LINQ
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var personService = new PersonService();
            var carService = new CarService();

            IEnumerable<Person> people = personService.GetPeople();
            IEnumerable<Car> cars = carService.GetCars();

            UseExpressions(people, cars);
            UseMethods(people, cars);
        }

        private static void UseExpressions(IEnumerable<Person> people, IEnumerable<Car> cars)
        {
            var result =
                from person in people
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
        }

        private static void UseMethods(IEnumerable<Person> people, IEnumerable<Car> cars)
        {
            var result = people
                .Join(
                    cars, person => string.Format("{0} {1}", person.FirstName, person.LastName),
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
