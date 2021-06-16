using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using WebApplication1.Models;

namespace WebApplication1.Controllers
{

    
    public class CarritoController : Controller
    {
        CarritoBDEntities db = new CarritoBDEntities();

        private int getIndice(int id)
        {
            List<CarritoItem> compras = (List<CarritoItem>)Session["carrito"];
            for (int i = 0; i < compras.Count; i++)
            {
                if (compras[i].Producto.Id == id)
                    return i;


            }
            return -1;
        }


        public ActionResult AgregarCarrito(int id)
        {
            if (Session["carrito"] == null)
            {
                List<CarritoItem> compras = new List<CarritoItem>();
                compras.Add(new CarritoItem(db.Producto.Find(id), 1));
                Session["carrito"] = compras;
            }
            else
            {
                List<CarritoItem> compras = (List<CarritoItem>)Session["carrito"];
                int IndiceExistente = getIndice(id);
                if (IndiceExistente == -1)
                {
                    compras.Add(new CarritoItem(db.Producto.Find(id), 1));
                }
                else
                {
                    compras[IndiceExistente].Cantidad ++;

                }
                Session["carrito"] = compras;
            }
            return View();

        }


        public ActionResult delete(int id)
        {
            List<CarritoItem> compras = (List<CarritoItem>)Session["carrito"];
            compras.RemoveAt(getIndice(id));
            return View("AgregarCarrito");
        }



        public ActionResult Index()
        {
            return View();
        }
    }
}