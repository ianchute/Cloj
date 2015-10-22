using System.Web.Http;
using Domain;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [EnableCors("*", "*", "*")]
    public class CustomerController : ApiController
    {
        CustomerRepository repository;

        public CustomerController()
        {
            repository = new CustomerRepository();
        }

        [HttpGet]
        public string AddCustomer()
        {
            string report = repository.Add("Ian", 23);

            return report;
        }
    }
}