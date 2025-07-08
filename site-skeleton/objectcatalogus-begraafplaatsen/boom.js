var treeData = [
              {
                "name": "Fysiek object",
		"target": "Fysiekobject",
                "parent": "null",
                "children": [
                  {
                    "name": "Terreindeel",
                    "target": "Terreindeel",
                    "parent": "Fysiekobject",
                    "children": [
                      {
                        "name": "Begraafplaats blok",
                        "target": "BegraafplaatsBlok",
                        "parent": "Terreindeel"
                      },
                      {
                        "name": "Begraafplaats rij",
                        "target": "BegraafplaatsRij",
                        "parent": "Terreindeel"
                      },
                      {
                        "name": "Strooiweide",
                        "parent": "Terreindeel"
                      }
                    ]
                  },
                  {
                    "name": "Element",
                    "parent": "Fysiekobject",
                    "children": [
                      {
                        "name": "Graf",
                        "parent": "Element"
                      },
                      {
                        "name": "Columbarium",
                        "parent": "Element"
                      },
                      {
                        "name": "Urnenveld",
                        "parent": "Element"
                      }
                    ]
                  }
                ]
              }
            ];
