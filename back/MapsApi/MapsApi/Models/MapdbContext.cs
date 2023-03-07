using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MapsApi.Models
{
    public partial class MapdbContext : DbContext
    {
        public MapdbContext()
        {
        }

        public MapdbContext(DbContextOptions<MapdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Langlat> Langlats { get; set; } = null!;
        public virtual DbSet<MapDb> MapDbs { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
          

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Langlat>(entity =>
            {
                entity.ToTable("langlat");
            });

            modelBuilder.Entity<MapDb>(entity =>
            {
                entity.HasKey(e => e.Index)
                    .HasName("PK_all-30skip-index");

                entity.ToTable("mapDb");

                entity.Property(e => e.Index)
                    .ValueGeneratedNever()
                    .HasColumnName("index");

                entity.Property(e => e.Crop)
                    .HasMaxLength(50)
                    .HasColumnName("crop");

                entity.Property(e => e.DistancePh).HasColumnName("distance_ph");

                entity.Property(e => e.DistanceSoil).HasColumnName("distance_soil");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.Priority)
                    .HasMaxLength(50)
                    .HasColumnName("priority");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
