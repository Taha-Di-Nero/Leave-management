using System;
using System.Collections.Generic;
using Seac.Coverage.Models;

namespace Seac.Coverage.Repositories.Base
{
    public interface IRepository<T> : IDisposable where T : BaseEntity
    {
        void Insert(T entity);
        void InsertAll(IEnumerable<T> entities);

        void Update(T entity);
        void UpdateAll(IEnumerable<T> entities);

        void Delete(T entity);
        void DeleteAll(IEnumerable<T> entities);

        T Get(long id);
        IEnumerable<T> GetAll();
    }
}
