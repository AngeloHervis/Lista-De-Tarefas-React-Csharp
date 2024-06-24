using Microsoft.EntityFrameworkCore;

namespace TarefasApi.Models;

public class TarefaContext : DbContext
{
    public TarefaContext(DbContextOptions<TarefaContext> options)
        : base(options) { }

    public DbSet<Tarefa> Tarefas { get; set; }
    public DbSet<Usuario> Usuarios { get; set; }
}
