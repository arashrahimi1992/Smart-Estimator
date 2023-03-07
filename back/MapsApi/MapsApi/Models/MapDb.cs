using System;
using System.Collections.Generic;

namespace MapsApi.Models
{
    public partial class MapDb
    {
        public int Index { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }
        public  string? Crop { get; set; }
        public string? Priority { get; set; }
        public double? DistancePh { get; set; }
        public double? DistanceSoil { get; set; }
    }
}
