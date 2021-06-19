using System.Collections.Generic;
using Lab03.Model;

namespace Lab03.Service
{
    public class CarService
    {
        private static readonly List<Car> CARS;

        static CarService()
        {
            CARS = new List<Car>()
            {
                new Car
                {
                    LicensePlateNumber = "AB12 CDE",
                    Manufacturer = "Tesla",
                    Model = "Model 3",
                    Price = 13.5M,
                    Owner = "Michael Smith"
                },
                new Car
                {
                    LicensePlateNumber = "AB12 CDF",
                    Manufacturer = "Volkswagen",
                    Model = "ID.4",
                    Price = 16.8M,
                    Owner = "Tom Brown"
                },
                new Car
                {
                    LicensePlateNumber = "AB12 CDG",
                    Manufacturer = "Kia",
                    Model = "e-Niro",
                    Price = 8.9M,
                    Owner = "Michael Smith"
                },
                new Car
                {
                    LicensePlateNumber = "AB12 CDH",
                    Manufacturer = "Volkswagen",
                    Model = "ID.3",
                    Price = 8.3M,
                    Owner = "Emma Jones"
                },
                new Car
                {
                    LicensePlateNumber = "AB12 CDI",
                    Manufacturer = "Hyundai",
                    Model = "Ioniq",
                    Price = 8.5M,
                    Owner = "George White"
                },
                new Car
                {
                    LicensePlateNumber = "AB12 CDJ",
                    Manufacturer = "Hyundai",
                    Model = "IONIQ 5",
                    Price = 13.5M,
                    Owner = "Emma Jones"
                },
                new Car
                {
                    LicensePlateNumber = "AB12 CDK",
                    Manufacturer = "Kia",
                    Model = "EV6",
                    Price = 13.5M,
                    Owner = "Anne Walker"
                },
                new Car
                {
                    LicensePlateNumber = "AB12 CDL",
                    Manufacturer = "Skoda",
                    Model = "ENYAQ",
                    Price = 12.6M,
                    Owner = "Tom Brown"
                },
                new Car
                {
                    LicensePlateNumber = "AB12 CDM",
                    Manufacturer = "Hyundai",
                    Model = "Kona",
                    Price = 7.5M,
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
