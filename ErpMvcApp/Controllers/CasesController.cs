using Microsoft.AspNetCore.Mvc;

namespace ErpMvcApp.Controllers
{
    public class CasesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
