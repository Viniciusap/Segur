using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Segur.Entities
{
    public class Insured
    {
        public Int64 Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string BillingAddress { get; set; }
        public Int64 LegalDocument { get; set; }
        public Int64 ResponsabilityScore { get; set; }
        public Int64 InsuranceId { get; set; }

    }
}
