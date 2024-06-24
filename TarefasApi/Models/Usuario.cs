using System.ComponentModel.DataAnnotations;

namespace TarefasApi.Models;

public class Usuario
{
    [Key]
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Email { get; set; }
    public string Senha { get; set; }
}