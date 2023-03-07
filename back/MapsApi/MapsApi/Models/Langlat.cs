using System;
using System.Collections.Generic;

namespace MapsApi.Models
{
    public partial class Langlat
    {
        public int Id { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }
    }
}
