function permitsMiddleware(req, res, next) {
  try {
    const menu = {
      title: "Mi título",
      menu: [
        {
          icon: 'fa-receipt',
          content: 'Menú',
          link: '/menu',
          sub_menu: [
            [
              { icon: "fa-list-ul", action: 'Listar Menú', link: '/menu' }
            ],
            [
              { icon: "fa-tasks", action: 'Agregar Menú', link: '/menu/agregar' },
              { icon: "fa-save", action: 'Publicar Menú', link: '/menu/publicar' }
            ]
          ]
        },
        {
          icon: 'fa-feather-alt',
          content: 'Pedidos',
          link: '/pedidos',
          sub_menu: [
            [
              { icon: "fa-list-ul", action: 'Listar Menú', link: '/menu' }
            ],
            [
              { icon: "fa-tasks", action: 'Agregar Menú', link: '/menu/agregar' },
              { icon: "fa-save", action: 'Publicar Menú', link: '/menu/publicar' }
            ]
          ]
        },
        {
          icon: 'fa-file-signature',
          content: 'Almacén',
          link: '/almacen',
          sub_menu: [
            [
              { icon: "fa-list-ul", action: 'Listar Menú', link: '/menu' }
            ],
            [
              { icon: "fa-tasks", action: 'Agregar Menú', link: '/menu/agregar' },
              { icon: "fa-save", action: 'Publicar Menú', link: '/menu/publicar' }
            ]
          ]
        },
        {
          icon: 'fa-shopping-cart',
          content: 'Compras',
          link: '/compras',
          sub_menu: [
            [
              { icon: "fa-list-ul", action: 'Listar Menú', link: '/menu' }
            ],
            [
              { icon: "fa-tasks", action: 'Agregar Menú', link: '/menu/agregar' },
              { icon: "fa-save", action: 'Publicar Menú', link: '/menu/publicar' }
            ]
          ]
        },
        {
          icon: 'fa-people-carry',
          content: 'Empleados',
          link: '/empleados',
          sub_menu: [
            [
              { icon: "fa-list-ul", action: 'Listar Menú', link: '/menu' }
            ],
            [
              { icon: "fa-tasks", action: 'Agregar Menú', link: '/menu/agregar' },
              { icon: "fa-save", action: 'Publicar Menú', link: '/menu/publicar' }
            ]
          ]
        },
        {
          icon: 'fa-utensils',
          content: 'Cocina',
          link: '/cocina',
          sub_menu: [
            [
              { icon: "fa-list-ul", action: 'Listar Menú', link: '/menu' }
            ],
            [
              { icon: "fa-tasks", action: 'Agregar Menú', link: '/menu/agregar' },
              { icon: "fa-save", action: 'Publicar Menú', link: '/menu/publicar' }
            ]
          ]
        },
        {
          icon: 'fa-file-excel',
          content: 'Reportes',
          link: '/reportes',
          sub_menu: [
            [
              { icon: "fa-list-ul", action: 'Listar Menú', link: '/menu' }
            ],
            [
              { icon: "fa-tasks", action: 'Agregar Menú', link: '/menu/agregar' },
              { icon: "fa-save", action: 'Publicar Menú', link: '/menu/publicar' }
            ]
          ]
        }
      ]
    }
    const sub_menu = [
      [
        { icon: "fa-list-ul", content: 'Listar Menú', link: '/menu' }
      ],
      [
        { icon: "fa-tasks", content: 'Agregar Menú', link: '/menu/agregar' },
        { icon: "fa-save", content: 'Publicar Menú', link: '/menu/publicar' }
      ]
    ]
    req.menu = menu
    req.sub_menu = sub_menu
    next()
  } catch(err) {
    next(err)
  }
}

module.exports = {
  permitsMiddleware
}
