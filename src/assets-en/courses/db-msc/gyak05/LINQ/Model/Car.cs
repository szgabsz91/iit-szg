namespace LINQ.Model
{
    public class Car
    {
        public string PlateNumber { get; set; }

        public string Manufacturer { get; set; }

        public decimal Price { get; set; }

        public string Owner { get; set; }

        public override string ToString()
        {
            return string.Format("Car[PlateNumber = {0}, Manufacturer = {1}, Price = {2}, Owner = {3}]", PlateNumber, Manufacturer, Price, Owner);
        }
    }
}
