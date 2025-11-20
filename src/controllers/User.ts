import { Request, Response } from 'express';
import { UserService } from '../services/User';


export class UserController {
  private userService: UserService;


  constructor() {
    this.userService = new UserService();
  }


  /**
   * POST /api/users - Créer un utilisateur
   */
  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await this.userService.createUser(req.body);
     
      res.status(201).json({
        success: true,
        message: 'Utilisateur créé avec succès',
        User: user
      });
      console.log(user)
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Erreur lors de la création'
      });
    }
  };
  /**
   * GET /api/users - Récupérer tous les utilisateurs
   */
  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userService.getAllUsers();
     
      res.status(200).json({
        success: true,
        count: users.length,
        data: users
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Erreur lors de la récupération'
      });
    }
  };
  /**
   * GET /api/users/:id - Récupérer un utilisateur par ID
   */
  public getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await this.userService.getUserById(req.params.id);
     
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message || 'Utilisateur introuvable'
      });
    }
  };

 /**
   * DELETE /api/users/:id - Supprimer un utilisateur
   */
  public deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.userService.deleteUserById(req.params.id);
     
      res.status(200).json({
        success: true,
        message: `Utilisateur ${req.params.id} supprimé avec succès`
      });
      console.log('utilisateur supprimé')
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Erreur lors de la suppression'
      });
    }
  };

  /**
 * PATCH /api/users/:id - Mettre à jour un utilisateur
 */
public updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedUser = await this.userService.updateUserById(
      req.params.id,
      req.body
    );
    
    res.status(200).json({
      success: true,
      message: `Utilisateur ${req.params.id} mis à jour avec succès`,
      data: updatedUser
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Erreur lors de la mise à jour'
    });
  }
};

}
