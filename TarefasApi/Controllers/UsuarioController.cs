using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TarefasApi.Models;

namespace TarefasApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsuarioController : ControllerBase{
    private readonly TarefaContext _context;

    public UsuarioController(TarefaContext context){
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios(){
        return await _context.Usuarios.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Usuario>> GetUsuario(Guid id){
        var usuario = await _context.Usuarios.FindAsync(id);

        if (usuario == null){
            return NotFound();
        }

        return usuario;
    }

    [HttpPost]
    public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario){
        _context.Usuarios.Add(usuario);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUsuario), new { id = usuario.Id }, usuario);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUsuario(Guid id, Usuario usuario){
        if (id != usuario.Id){
            return BadRequest();
        }

        _context.Entry(usuario).State = EntityState.Modified;

        try{
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException){
            if (!UsuarioExists(id)){
                return NotFound();
            }
            else{
                throw;
            }
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUsuario(Guid id){
        var usuario = await _context.Usuarios.FindAsync(id);

        if (usuario == null){
            return NotFound();
        }

        _context.Usuarios.Remove(usuario);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool UsuarioExists(Guid id){
        return _context.Usuarios.Any(e => e.Id == id);
    }
}