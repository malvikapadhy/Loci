"""create account table

Revision ID: 072baa246dea
Revises: 2868d26f1840
Create Date: 2021-03-11 20:47:11.458367

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '072baa246dea'
down_revision = '2868d26f1840'
branch_labels = None
depends_on = None


def upgrade():
    # op.create_table(
    #         'Users',
    #         sa.Column('email', sa.String(length=150), nullable=False),
    #         sa.Column('password', sa.String(length=100), nullable=True),
    #         sa.Column('name', sa.String(length=100), nullable=True),
    #         sa.Column('country', sa.String(length=100), nullable=True),
    #         sa.Column('city', sa.String(length=100), nullable=True),
    #         sa.Column('age', sa.Integer, nullable=True),
    #         sa.PrimaryKeyConstraint('email', mssql_clustered=True)
    #     )
    # op.create_table(
    #         'Users',
    #         sa.Column('email', sa.String(length=150), nullable=False),
    #         sa.Column('password', sa.String(length=100), nullable=True),
    #         sa.Column('name', sa.String(length=100), nullable=True),
    #         sa.Column('country', sa.String(length=100), nullable=True),
    #         sa.Column('city', sa.String(length=100), nullable=True),
    #         sa.Column('age', sa.Integer, nullable=True),
    #         sa.PrimaryKeyConstraint('email', mssql_clustered=True)
    #     )
    pass


def downgrade():
    pass
