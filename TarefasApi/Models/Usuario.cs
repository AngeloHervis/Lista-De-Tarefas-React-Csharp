using System.ComponentModel.DataAnnotations;

namespace TarefasApi.Models;

public class Usuario
{
    [Key]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string Nome { get; set; }
    public string Email { get; set; }
    public string Senha { get; set; }
}