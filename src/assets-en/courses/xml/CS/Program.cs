using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XMLCSApp.DOM;
using XMLCSApp.LINQ;
using XMLCSApp.SAX;

namespace XMLCSApp
{
    class Program
    {
        static void Main(string[] args)
        {
            SAXApp saxApp = new SAXApp();
            saxApp.DoWork();
            Console.WriteLine();
            Console.WriteLine("=========================");

            DOMApp domApp = new DOMApp();
            domApp.DoWork();
            Console.WriteLine();
            Console.WriteLine("=========================");

            LINQApp linqApp = new LINQApp();
            linqApp.DoWork();
            Console.WriteLine();
            Console.WriteLine("=========================");

            Console.ReadKey();
        }
    }
}
