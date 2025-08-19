using ErpMvcApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace ErpMvcApp.Controllers
{
    public class CasesController : Controller
    {
        public IActionResult Index()
        {
            return View(new CasesModel() { GreetingsText = "John Smith" });
        }

        [AutoValidateAntiforgeryToken]
        [HttpPost]
        public IActionResult Index(CasesModel casesModel)
        {
            return View(casesModel);
        }
    }
}
