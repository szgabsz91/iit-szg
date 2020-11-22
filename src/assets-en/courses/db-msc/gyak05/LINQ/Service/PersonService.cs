using System.Collections.Generic;
using LINQ.Model;

namespace LINQ.Service
{
    public class PersonService : IPersonService
    {
        private static readonly List<Person> PEOPLE;
        
        static PersonService()
        {
            PEOPLE = new List<Person>
            {
                new Person
                {
                    FirstName = "Anne",
                    LastName = "Walker",
                    Salary = 30
                },
                new Person
                {
                    FirstName = "Michael",
                    LastName = "Smith",
                    Salary = 1000
                },
                new Person
                {
                    FirstName = "George",
                    LastName = "White",
                    Salary = 50
                },
                new Person
                {
                    FirstName = "Tom",
                    LastName = "Brown",
                    Salary = 200
                },
                new Person
                {
                    FirstName = "Emma",
                    LastName = "Jones",
                    Salary = 150
                }
            };
        }

        public IEnumerable<Person> GetPeople()
        {
            return PEOPLE;
        }
    }
}
