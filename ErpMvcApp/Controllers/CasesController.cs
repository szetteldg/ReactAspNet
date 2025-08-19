using ErpMvcApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace ErpMvcApp.Controllers
{
    public class CasesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [AutoValidateAntiforgeryToken]
        [HttpPost]
        public IActionResult Index(CasesModel caseModel)
        {
            return View(caseModel);
        }
    }
}
