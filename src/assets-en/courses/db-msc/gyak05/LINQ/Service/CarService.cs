using LINQ.Model;
using System.Collections.Generic;

namespace LINQ.Service
{
    public class CarService : ICarService
    {
        private static readonly List<Car> CARS;

        static CarService()
        {
            CARS = new List<Car>()
            {
                new Car
                {
                    PlateNumber = "ABC-123",
                    Manufacturer = "Audi",
                    Price = 6.8M,
                    Owner = "Michael Smith"
                },
                new Car
                {
                    PlateNumber = "ABC-124",
                    Manufacturer = "Honda",
                    Price = 7.2M,
                    Owner = "Tom Brown"
                },
                new Car
                {
                    PlateNumber = "ABC-125",
                    Manufacturer = "Mercedes",
                    Price = 23M,
                    Owner = "Michael Smith"
                },
                new Car
                {
                    PlateNumber = "ABC-126",
                    Manufacturer = "Opel",
                    Price = 3.1M,
                    Owner = "Emma Jones"
                },
                new Car
                {
                    PlateNumber = "ABC-127",
                    Manufacturer = "Renault",
                    Price = 3.9M,
                    Owner = "George White"
                },
                new Car
                {
                    PlateNumber = "ABC-128",
                    Manufacturer = "BMW",
                    Price = 8.9M,
                    Owner = "Emma Jones"
                },
                new Car
                {
                    PlateNumber = "ABC-129",
                    Manufacturer = "Trabant",
                    Price = 0.3M,
                    Owner = "Anne Walker"
                },
                new Car
                {
                    PlateNumber = "ABC-130",
                    Manufacturer = "Fiat",
                    Price = 2.9M,
                    Owner = "Tom Brown"
                },
                new Car
                {
                    PlateNumber = "ABC-131",
                    Manufacturer = "Mazda",
                    Price = 3.4M,
                    Owner = "Michael Smith"
                }
            };
        }

        public IEnumerable<Car> GetCars()
        {
            return CARS;
        }
    }
}
