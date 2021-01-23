using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Segur.Entities
{
    public class Products
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Brand { get; set; }
        public double Value { get; set; }
        public string BarCode { get; set; }
        public string Category { get; set; }
        public Int64 QuantityMinimun { get; set; }

    }
}
