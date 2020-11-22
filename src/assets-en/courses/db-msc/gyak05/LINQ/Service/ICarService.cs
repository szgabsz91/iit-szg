using LINQ.Model;
using System.Collections.Generic;

namespace LINQ.Service
{
    public interface ICarService
    {
        IEnumerable<Car> GetCars();
    }
}