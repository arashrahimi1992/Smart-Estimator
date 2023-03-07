using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MapsApi.Models;

namespace MapsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MapDbsController : ControllerBase
    {
        private readonly MapdbContext _context;

        public MapDbsController(MapdbContext context)
        {
            _context = context;
        }

        // GET: api/MapDbs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MapDb>>> GetMapDbs()
        {
            return await _context.MapDbs.ToListAsync();
        }

        // GET: api/MapDbs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MapDb>> GetMapDb(int id)
        {
            var mapDb = await _context.MapDbs.FindAsync(id);

            if (mapDb == null)
            {
                return NotFound();
            }

            return mapDb;
        }
        [HttpGet("crop/{cropValue}")]
        public async Task<ActionResult<IEnumerable<MapDb>>> GetMapByCrop(string cropValue)
        {
            var mapData = await _context.MapDbs
                .Where(m => m.Crop == cropValue)
                .ToListAsync();

            if (mapData == null)
            {
                return NotFound();
            }

            return mapData;
        } 
        // PUT: api/MapDbs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMapDb(int id, MapDb mapDb)
        {
            if (id != mapDb.Index)
            {
                return BadRequest();
            }

            _context.Entry(mapDb).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MapDbExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MapDbs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MapDb>> PostMapDb(MapDb mapDb)
        {
            _context.MapDbs.Add(mapDb);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MapDbExists(mapDb.Index))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMapDb", new { id = mapDb.Index }, mapDb);
        }

        // DELETE: api/MapDbs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMapDb(int id)
        {
            var mapDb = await _context.MapDbs.FindAsync(id);
            if (mapDb == null)
            {
                return NotFound();
            }

            _context.MapDbs.Remove(mapDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MapDbExists(int id)
        {
            return _context.MapDbs.Any(e => e.Index == id);
        }
    }
}
