namespace Lab03.Model
{
    public class Car
    {
        public string LicensePlateNumber { get; set; }

        public string Manufacturer { get; set; }

        public string Model { get; set; }

        public decimal Price { get; set; }

        public string Owner { get; set; }

        public override string ToString()
        {
            return string.Format("Car[LicensePlateNumber = {0}, Manufacturer = {1}, Model = {2}, Price = {3}, Owner = {4}]", LicensePlateNumber, Manufacturer, Model, Price, Owner);
        }
    }
}
